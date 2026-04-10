import Container from '../ui/Container'

export default function Stats() {
  const stats = [
    { value: '10,000+', label: 'Active Students', icon: '👥' },
    { value: '500+', label: 'Video Courses', icon: '📚' },
    { value: '50+', label: 'Expert Instructors', icon: '👨‍🏫' },
    { value: '5,000+', label: 'Certificates Issued', icon: '🎓' },
  ]
  
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
