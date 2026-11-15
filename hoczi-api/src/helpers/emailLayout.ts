// Shared Hoczi email frame (logo + body + footer). Callers pass already-safe HTML for the body.

const LOGO_URL = 'https://d1y3v0ou093g3m.cloudfront.net/18f9b2ba-1237-41ce-b880-cf0aa1d940ab-logo.png';
const DEFAULT_FOOTER = 'Email được gửi từ Hoczi.';

export function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 * @param title     plain text, escaped here
 * @param bodyHtml  trusted HTML (rendered by the server from allow-listed content)
 * @param footerHtml trusted HTML; defaults to the Hoczi footer
 */
export function wrapEmailHtml(title: string, bodyHtml: string, footerHtml: string = escapeHtml(DEFAULT_FOOTER)) {
    return `<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:24px 12px;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#18181b;">
<div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:8px;padding:24px;">
  <div style="text-align:center;"><img src="${LOGO_URL}" alt="Hoczi" width="56" height="56" style="width:56px;height:56px;"></div>
  <div style="font-size:15px;line-height:1.6;margin-top:16px;">
${bodyHtml}
  </div>
  <hr style="border:none;border-top:1px solid #e4e4e7;margin:24px 0 12px;">
  <p style="font-size:12px;color:#71717a;text-align:center;margin:0;">${footerHtml}</p>
</div>
</body></html>`;
}
