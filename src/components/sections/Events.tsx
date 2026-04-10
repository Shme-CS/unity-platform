import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

export default function Events() {
  const events = [
    {
      type: 'Workshop',
      title: 'Web Development Workshop',
      description: 'Build a full-stack app from scratch',
      date: 'Apr 15, 2026',
      time: '2:00 PM'
    },
    {
      type: 'Study Group',
      title: 'AI/ML Study Group Kickoff',
      description: 'Weekly sessions on machine learning fundamentals',
      date: 'Apr 20, 2026',
      time: '10:00 AM'
    },
    {
      type: 'Hackathon',
      title: 'Spring Hackathon 2026',
      description: '48-hour hackathon with prizes and mentors',
      date: 'May 1-3, 2026',
      time: 'All Day'
    },
  ]
  
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle
            label="Events"
            title="Upcoming Events & Workshops"
            centered
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="p-6">
              <Badge className="mb-4">{event.type}</Badge>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {event.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.time}
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full" href="#register">
                Register
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
