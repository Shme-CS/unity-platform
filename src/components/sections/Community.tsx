import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

export default function Community() {
  const features = [
    {
      icon: '💬',
      title: 'Discussion Forums & Q&A'
    },
    {
      icon: '👥',
      title: 'Study Groups & Peer Support'
    },
    {
      icon: '🎯',
      title: 'Mentorship & Code Reviews'
    },
  ]
  
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Join a Thriving<br />Tech Community
          </h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            Connect with fellow learners, join study groups, participate in discussions, and grow together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="secondary" href="#register">
            Join the Community
          </Button>
        </div>
      </Container>
    </section>
  )
}
