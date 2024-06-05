```mermaid
sequenceDiagram
    participant browser
    participant server

    activate server
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    deactivate server
    activate server
    server-->>browser: add the new note to the notes shown on the page
    deactivate server
```
