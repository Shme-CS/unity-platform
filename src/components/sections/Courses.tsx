import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

export default function Courses() {
  const courses = [
    {
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?w=600&h=340&fit=crop',
      category: 'Web Dev',
      title: 'Complete Web Development Bootcamp',
      instructor: 'Dr. Sarah Chen',
      rating: 4.9,
      reviews: '2.4k'
    },
    {
      image: 'https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?w=600&h=340&fit=crop',
      category: 'Design',
      title: 'Graphic Design Fundamentals',
      instructor: 'Prof. Alex Rivera',
      rating: 4.8,
      reviews: '1.8k'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
      category: 'Data Science',
      title: 'Data Science & Machine Learning',
      instructor: 'Dr. James Park',
      rating: 4.9,
      reviews: '3.1k'
    },
    {
      image: 'https://images.unsplash.com/photo-1760531932521-8eb5a064dbca?w=600&h=340&fit=crop',
      category: 'Mobile',
      title: 'Mobile App Development with React Native',
      instructor: 'Eng. Maria Lopez',
      rating: 4.7,
      reviews: '1.5k'
    },
  ]
  
  return (
    <section className="py-20 bg-white" id="courses">
      <Container>
        <div className="flex items-end justify-between mb-12">
          <SectionTitle
            label="Top Courses"
            title="Featured Courses"
            subtitle="Handpicked courses to accelerate your learning journey."
          />
          <Button variant="outline" href="#all-courses" className="hidden sm:inline-flex">
            View All
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card key={index} hover className="overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4">
                  {course.category}
                </Badge>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-lg text-gray-900 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600">{course.instructor}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900">{course.rating}</span>
                    <span className="text-sm text-gray-500">({course.reviews})</span>
                  </div>
                  <Button size="sm" href="#enroll">Enroll</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
