
import { Program, Member } from './types';

export const INITIAL_PROGRAMS: Program[] = [
  {
    id: 'p1',
    title: 'Clean Water Initiative',
    description: 'Providing sustainable water filtration systems to remote villages in the Amazon basin.',
    category: 'Environment',
    imageUrl: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800',
    goalAmount: 50000,
    currentAmount: 32000,
    status: 'active'
  },
  {
    id: 'p2',
    title: 'Digital Literacy for Youth',
    description: 'Equipping underprivileged youth with coding and digital design skills to prepare them for the future job market.',
    category: 'Education',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    goalAmount: 25000,
    currentAmount: 18500,
    status: 'active'
  },
  {
    id: 'p3',
    title: '2023 Reforestation Project',
    description: 'Our massive effort to plant 50,000 indigenous trees across the scorched regions of the Australian Outback.',
    category: 'Environment',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400'
    ],
    collaborators: ['EarthWatch', 'Green Peace Foundation', 'Local Forestry Dept'],
    goalAmount: 40000,
    currentAmount: 42500,
    impactStatement: 'Over the course of 12 months, we transformed 500 hectares of arid land into a thriving ecosystem. We worked closely with local communities to ensure the survival of saplings.',
    status: 'completed'
  },
  {
    id: 'p4',
    title: 'Mobile Health Clinics',
    description: 'Deploying custom-fitted vans to provide basic healthcare and vaccinations in rural Kenya.',
    category: 'Health',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1504813184591-01592fd03cfd?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1538108197017-c13466739195?auto=format&fit=crop&q=80&w=400'
    ],
    collaborators: ['Red Cross', 'HealthBridge Int', 'Kenya Ministry of Health'],
    goalAmount: 60000,
    currentAmount: 60000,
    impactStatement: 'By removing the barrier of distance, we reached the most isolated communities. Our teams provided over 5,000 pediatric checkups and delivered vital medical supplies to village elders.',
    status: 'completed'
  }
];

export const INITIAL_MEMBERS: Member[] = [
  {
    id: 'm1',
    name: 'Sarah Jenkins',
    role: 'Executive Director',
    bio: 'Environmental scientist with 15 years of experience in sustainable development.',
    imageUrl: 'https://picsum.photos/seed/sarah/400/400',
    linkedIn: '#'
  },
  {
    id: 'm2',
    name: 'Marcus Chen',
    role: 'Head of Operations',
    bio: 'Logistics expert dedicated to ensuring resources reach those who need them most.',
    imageUrl: 'https://picsum.photos/seed/marcus/400/400',
    linkedIn: '#'
  }
];
