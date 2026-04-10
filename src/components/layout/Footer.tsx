import Container from '../ui/Container'

export default function Footer() {
  const footerLinks = {
    platform: [
      { label: 'Courses', href: '#courses' },
      { label: 'Resources', href: '#resources' },
      { label: 'Community', href: '#community' },
      { label: 'Leaderboard', href: '#leaderboard' },
      { label: 'Projects', href: '#projects' },
    ],
    company: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Support', href: '#support' },
    ],
  }
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CT</span>
              </div>
              <span className="text-xl font-bold text-white">CTC Club</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The ultimate tech learning platform for university students. Learn, build, and grow your career.
            </p>
          </div>
          
          {/* Platform Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">Get the latest courses and events delivered to your inbox.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 CTC Club Learning Platform. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
