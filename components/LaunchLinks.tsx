import { site } from "../content/site";

export default function LaunchLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className="launch-links">
      <a className="button" href={site.appStoreUrl} target="_blank" rel="noopener" aria-label={compact ? "Download on the App Store" : undefined}>
        {compact ? "App Store" : "Download on the App Store"}
      </a>
      <a className="button button-secondary" href={site.communityUrl} target="_blank" rel="noopener" aria-label={compact ? "Join Our Community" : undefined}>
        {compact ? "Community" : "Join Our Community"}
      </a>
    </div>
  );
}
