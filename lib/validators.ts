export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isBusinessEmail(email: string) {
  // simple filtre (optionnel) — à adapter
  const freeDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com", "icloud.com"];
  const domain = email.split("@")[1]?.toLowerCase();
  return domain ? !freeDomains.includes(domain) : false;
}
