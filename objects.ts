// AI-Assisted Practice: Generate a type alias for a Vulnerability
// with properties like id, severity, and url

type Vulnerability = {
    id: number;
    severity: string;
    url: string;
};

// Function that accepts a Vulnerability object and returns a formatted string summary
function formatVulnerabilitySummary(vulnerability: Vulnerability): string {
    return `Vulnerability ID: ${vulnerability.id}\nSeverity: ${vulnerability.severity}\nURL: ${vulnerability.url}`;
}
