import { Concept } from '@/types'

export const concepts: Concept[] = [
  {
    id: 'psyche',
    title: 'The Psyche',
    slug: 'psyche',
    summary: 'The totality of all psychic processes, both conscious and unconscious, forming the complete personality.',
    category: 'structure',
    difficulty: 'foundational',
    color: {
      primary: 'blue-500',
      secondary: 'blue-600'
    },
    relatedConcepts: ['ego', 'shadow', 'self'],
    order: 1
  },
  {
    id: 'ego',
    title: 'Ego',
    slug: 'ego',
    summary: 'The center of consciousness, our sense of "I" that navigates daily life and mediates between inner and outer worlds.',
    category: 'structure',
    difficulty: 'foundational',
    color: {
      primary: 'amber-500',
      secondary: 'amber-600'
    },
    relatedConcepts: ['psyche', 'persona', 'shadow'],
    order: 2
  },
  {
    id: 'persona',
    title: 'Persona',
    slug: 'persona',
    summary: 'The social mask we wear in public, adapting our presentation to meet the expectations and demands of our environment.',
    category: 'archetype',
    difficulty: 'foundational',
    color: {
      primary: 'teal-500',
      secondary: 'teal-600'
    },
    relatedConcepts: ['ego', 'shadow', 'self'],
    order: 3
  },
  {
    id: 'shadow',
    title: 'Shadow',
    slug: 'shadow',
    summary: 'The hidden, repressed, or denied aspects of personality that exist in the personal unconscious, often projected onto others.',
    category: 'archetype',
    difficulty: 'foundational',
    color: {
      primary: 'violet-500',
      secondary: 'violet-600'
    },
    relatedConcepts: ['ego', 'persona', 'projection'],
    order: 4
  },
  {
    id: 'anima-animus',
    title: 'Anima/Animus',
    slug: 'anima-animus',
    summary: 'The contrasexual soul image—the inner feminine in men (anima) and inner masculine in women (animus)—that mediates between ego and unconscious.',
    category: 'archetype',
    difficulty: 'foundational',
    color: {
      primary: 'rose-500',
      secondary: 'indigo-500'
    },
    relatedConcepts: ['ego', 'self', 'projection'],
    order: 5
  },
  {
    id: 'self',
    title: 'The Self',
    slug: 'self',
    summary: 'The archetype of wholeness and the regulating center of the total personality, representing the unified conscious and unconscious.',
    category: 'archetype',
    difficulty: 'foundational',
    color: {
      primary: 'white',
      secondary: 'neutral-300'
    },
    relatedConcepts: ['ego', 'individuation', 'psyche'],
    order: 6
  }
]