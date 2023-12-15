export interface SiteConfig {
  siteName: string
  description: string
  currentlyAt: string
  socialLinks: {
    twitter: string
    github: string
    linkedin: string
    instagran: string
  }
}

const SiteConfig: SiteConfig = {
  siteName: 'Arlen Resende Full Stack Developer',
  description:
    'Unlock the world of web development with Arlen Resende, a Full Stack Developer. From front-end finesse to back-end brilliance, explore a comprehensive skill set in just one click',
  currentlyAt: 'Brazil',
  socialLinks: {
    twitter: 'http://www.google.com',
    github: 'http://www.google.com',
    linkedin: 'http://www.google.com',
    instagran: 'http://www.google.com',
  },
}

export default SiteConfig
