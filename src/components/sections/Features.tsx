import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'

export default function Features() {
  const features = [
    {
      icon: '📖',
      title: 'Structured Courses',
      description: 'Follow curated learning paths with video lessons, quizzes, and hands-on labs.'
    },
    {
      icon: '📊',
      title: 'Track Progress',
      description: 'XP system, daily streaks, and detailed analytics to keep you motivated.'
    },
    {
      icon: '🎓',
      title: 'Earn Certificates',
      description: 'Get verified certificates upon completion to showcase your skills.'
    },
    {
      icon: '💻',
      title: 'Submit Projects',
      description: 'Build real-world projects and submit via GitHub for review.'
    },
    {
      icon: '💬',
      title: 'Get Support',
      description: '24/7 support tickets, discussion forums, and peer-to-peer help.'
    },
    {
      icon: '👤',
      title: 'Role-Based Access',
      description: 'Tailored dashboards for students, instructors, and admins.'
    },
  ]
  
  return (
    <section className="py-20 bg-gray-50" id="features">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle
            label="Platform Features"
            title="Everything You Need to Succeed"
            subtitle="A complete learning ecosystem designed specifically for university students and tech enthusiasts."
            centered
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="p-8">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
