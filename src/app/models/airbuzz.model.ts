export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: string;
  features: string[];
  imageUrl: string;
  category: 'cinema' | 'fpv' | 'broadcast' | 'photo' | 'auto';
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'cinema' | 'pub' | 'fpv' | 'broadcast';
  categoryLabel: string;
  description: string;
  equipment: string;
  location: string;
  imageUrl: string;
  videoBadge?: string;
  highlight?: string;
}

export interface FleetItem {
  id: string;
  name: string;
  role: string;
  sensor: string;
  resolution: string;
  formats: string[];
  speed: string;
  operators: string;
  scenarios: string[];
  description: string;
  imageUrl: string;
  features: string[];
  badge: string;
}

export interface ClientReference {
  name: string;
  category: string;
  logoText: string;
  projectSample: string;
}

export interface RegulationScenario {
  code: string;
  title: string;
  zone: string;
  description: string;
  homologation: string;
}

export interface ContactRequest {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  serviceType: string;
  location: string;
  shootDate: string;
  message: string;
}
