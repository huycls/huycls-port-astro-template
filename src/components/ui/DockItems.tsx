import { Github, Mail, Linkedin, Settings } from "lucide-react";

export const getDockItems = () => [
  { 
    icon: <Github className="w-6 h-6" />, 
    label: 'Github', 
    onClick: () => window.open('https://github.com', '_blank') 
  },
  { 
    icon: <Mail className="w-6 h-6" />, 
    label: 'Mail', 
    onClick: () => window.location.href = 'mailto:huy@example.com' 
  },
  { 
    icon: <Linkedin className="w-6 h-6" />, 
    label: 'Linkedin', 
    onClick: () => window.open('https://linkedin.com', '_blank') 
  },
  { 
    icon: <Settings className="w-6 h-6" />, 
    label: 'Settings', 
    onClick: () => alert('Settings!') 
  },
];

