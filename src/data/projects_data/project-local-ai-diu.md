---
title: "Local AI on Router — DIU Integration"
description: "On-router AI inference and device control, with DIU bridging the local AI harness and backend APIs without cloud AI inference."
technologies: ["Local AI", "Rust", "Axum", "Tokio", "REST API", "Embedded Linux"]
status: "In Progress"
date: "2026/07-Present"
image: "images/projects/local-ai-diu.svg"
link: ""
---

## Local AI, Directly on the Router

This project brings **local AI to the router itself**, keeping model inference and network-management operations on the device instead of relying on cloud AI inference. The local AI harness connects to device capabilities through **DIU**.

My focus is the **DIU integration layer that bridges the AI harness and backend APIs**: connecting AI-generated requests to real router functions and returning results the harness can use.

## Architecture

The system separates **local model inference** from **backend function calling**, with both paths running on the router:

- **Command entry**: A local **command gateway** accepts text requests and forwards them to **AIZip Harness**. It returns a structured result and response text to the caller.
- **Local inference**: The harness uses **llama-server** to run **Gemma 3 1B** in GGUF format on the router's **Hexagon NPU**. Two additional model servers run intent and activity classifiers on the **CPU** to help interpret requests.
- **Function calling**: The harness calls **Genix DIU API**, which bridges requests to local network-management services and router APIs, then returns the results.
- **Response construction**: The current build uses the language model to help understand requests; answers about router data are constructed by application logic from backend results.

**My contribution centers on bridging the harness and backend APIs through DIU**, including request mapping, backend authentication, data formatting, and error handling. The architecture diagram highlights this integration layer separately from the model inference stack.

The harness provides a **text-in / text-out** interface. Speech recognition and speech synthesis can be connected by the calling application.

## My Contribution: Connecting AI to Router Capabilities

- **Backend API Integration**: Expose router and network-management functions through a common HTTP interface for the harness, covering Wi-Fi, connected devices, traffic, profiles, and security information.
- **Name-to-ID Resolution**: Translate supported application names and aliases into backend identifiers, so callers do not need to supply raw IDs for every operation.
- **Response Adaptation**: Support structured JSON and readable text responses, with field selection and formatting to make backend results usable by the harness.
- **Session Management**: Handle router login, cache the backend session, and reauthenticate when the backend rejects an expired or invalid session.
- **Consistent Error Handling**: Normalize validation errors, backend failures, and timeouts so the harness receives a clear result when an operation cannot be completed.

## Integration Challenges

### Bridging Different API Contracts

The harness and backend services use different representations of network information and operations. DIU provides an adapter layer that maps requests to the appropriate backend and formats the returned data.

### Resolving Names Without Guessing

Application names supplied by the harness may differ from backend names. The resolver applies normalized matching, aliases, and constrained fallback matching. Ambiguous matches return an error rather than selecting an arbitrary application.

### Diagnosing the Local Request Path

Request IDs, backend call logs, and health information help trace failures across the harness-to-DIU-to-backend path. This makes it easier to distinguish request issues from backend authentication, connectivity, or service problems.

## Technical Stack

- **DIU service**: Rust, Axum, Tokio, Reqwest, and Serde.
- **Integration**: HTTP APIs, JSON/text responses, backend session handling, and request tracing.
- **Runtime environment**: ARM64 router running Embedded Linux, with local model inference accelerated by the router's NPU.

The project demonstrates how an on-device AI system can connect to practical network-management functions through a dedicated backend integration layer.
