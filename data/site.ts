export const DASHBOARD_URL = "https://dashboard.ghostatlasip.com";
export const REGISTER_URL = `${DASHBOARD_URL}/register`;
export const LEGACY_APP_URL = "https://app.ghostatlasip.com";

export function orderUrl(product: string, tier?: string) {
  const url = `${DASHBOARD_URL}/order?product=${product}`;
  return tier ? `${url}&tier=${tier}` : url;
}

export const SALES_EMAIL = "sales@ghostatlasip.com";
export const SUPPORT_EMAIL = "support@ghostatlasip.com";
