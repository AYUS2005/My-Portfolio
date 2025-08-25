import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4" data-testid="footer-name">
            Ayush Singh
          </h3>
          <p className="text-gray-400 mb-6" data-testid="footer-tagline">
            Full Stack Developer passionate about creating innovative solutions
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:ayushhomz@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="footer-email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="tel:+919810238290" 
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="footer-phone"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400" data-testid="footer-copyright">
              &copy; 2025 Ayush Singh. All rights reserved. Built with ❤️ and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
