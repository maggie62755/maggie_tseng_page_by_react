import fs from 'fs';
import path from 'path';

const dir = 'C:/Users/s1065/project/Maggie/maggie-intro/src/data/projects_data';

const files = fs.readdirSync(dir).filter(f => f.startsWith('project-') && f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace import.meta.env.BASE_URL with empty string or placeholder
  // wait, some files might use template literals like `${import.meta.env.BASE_URL}images/...`
  // so we can replace `${import.meta.env.BASE_URL}` with `/maggie_tseng_page_by_react/` or `/`
  // Actually replacing `import.meta.env.BASE_URL` with '""' might result in `"" + "images..."` if not template string.
  // We can just regex replace the exact occurrences.
  content = content.replace(/\$\{import\.meta\.env\.BASE_URL\}/g, '');
  content = content.replace(/import\.meta\.env\.BASE_URL/g, '""');
  // Remove imports and exports
  content = content.replace(/import\s+type\s+.*?;/g, '');
  content = content.replace(/export\s+const\s+\w+\s*:\s*\w+\s*=\s*/, 'return ');
  
  // Now wrap it in a function and eval it
  try {
    const fn = new Function(`
      ${content}
    `);
    const project = fn();
    
    // Construct frontmatter
    let md = '---\n';
    md += `title: "${project.title.replace(/"/g, '\\"')}"\n`;
    md += `description: "${project.description.replace(/"/g, '\\"')}"\n`;
    md += `technologies: ${JSON.stringify(project.technologies)}\n`;
    md += `status: "${project.status}"\n`;
    if (project.date) {
      md += `date: "${project.date}"\n`;
    }
    md += `image: "${project.image}"\n`;
    md += `link: "${project.link}"\n`;
    if (project.sourceCode) {
      md += `sourceCode: "${project.sourceCode}"\n`;
    }
    md += '---\n\n';
    
    // Construct markdown body from detailedContent
    if (project.detailedContent) {
      for (const item of project.detailedContent) {
        switch (item.type) {
          case 'heading':
            md += `### ${item.content}\n\n`;
            break;
          case 'paragraph':
            md += `${item.content}\n\n`;
            break;
          case 'list':
            for (const li of item.items) {
              md += `- ${li}\n`;
            }
            md += '\n';
            break;
          case 'image':
            md += `![${item.alt || ''}](${item.src})\n\n`;
            break;
          case 'link':
            if (item.links) {
              for (const link of item.links) {
                md += `[${link.text || link.url}](${link.url})\n\n`;
              }
            } else if (item.url) {
              md += `[${item.text || item.url}](${item.url})\n\n`;
            }
            break;
        }
      }
    }
    
    const mdPath = path.join(dir, file.replace('.ts', '.md'));
    fs.writeFileSync(mdPath, md, 'utf-8');
    console.log(`Converted ${file} to ${path.basename(mdPath)}`);
    
  } catch (e) {
    console.error(`Error converting ${file}:`, e);
  }
}
