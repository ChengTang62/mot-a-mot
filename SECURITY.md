# Security and privacy

This release has no authentication service, backend database, telemetry or application progress API. Progress is local browser data, not encrypted, and accessible to scripts running on the same origin. Host on an origin you trust. Device speech engines may use remote services. External dictionary links open only when clicked.

Never put API keys in frontend source or Vite environment variables. If adding accounts or cloud synchronization, implement server-side identity checks, per-user authorization and origin protection; do not trust a client-supplied user ID.

For a sensitive vulnerability, use the repository's private security reporting feature when enabled; do not post secrets, exploit details affecting users or personal progress in public issues. Before public launch, the maintainer should enable private vulnerability reporting on GitHub.
