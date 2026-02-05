// Basic typed variables for a scan

let scanId: number = 1;
let targetUrl: string = "https://example.com";
let isCompleted: boolean = false;

// SeverityLevel enum
enum SeverityLevel {
  Low = "low",
  Medium = "medium",
  High = "high",
  Critical = "critical"
}

// Interface using SeverityLevel enum
interface ScanResult {
  scanId: number;
  targetUrl: string;
  isCompleted: boolean;
  severity: SeverityLevel;
  message?: string;
}