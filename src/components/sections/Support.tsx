import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function Support() {
  const supportOptions = [
    {
      icon: '🎫',
      title: 'Submit a Ticket',
      description: 'Create a support ticket and get a response within 24 hours.',
      action: 'Get Help'
    },
    {
      icon: '💬',
      title: 'Community Forum',
      description: 'Ask questions and get answers from the community.',
      action: 'Visit Forum'
    },
    {
      icon: '📚',
      title: 'Knowledge Base',
      description: 'Browse FAQs, tutorials, and troubleshooting guides.',
      action: 'Browse Docs'
    },
  ]
  
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle
            label="Support"
            title="We're Here to Help"
            subtitle="Get help instantly with our multi-channel support system."
            centered
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <Card key={index} className="p-8 text-center">
              <div className="text-5xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {option.description}
              </p>
              <Button variant="outline" href="#support">
                {option.action}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
