import React from 'react'
import { Star } from './Star'

interface StarsProps {
  count: number
}

export const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
  return (
    count >= 1 &&
    count <= 5 && (
      <ul className="card-body-stars">
        {Array.from({ length: count }, (_, index) => (
          <Star />
        ))}
      </ul>
    )
  )
}
