export function compassDirectionHelper (grade: number) {
  const compassDirections = [
    { direction: 'N', minGrade: 0, maxGrade: 23 },
    { direction: 'NE', minGrade: 23, maxGrade: 68 },
    { direction: 'E', minGrade: 68, maxGrade: 113 },
    { direction: 'SE', minGrade: 113, maxGrade: 158 },
    { direction: 'S', minGrade: 158, maxGrade: 203 },
    { direction: 'SW', minGrade: 203, maxGrade: 248 },
    { direction: 'W', minGrade: 248, maxGrade: 293 },
    { direction: 'NW', minGrade: 293, maxGrade: 338 },
    { direction: 'N', minGrade: 338, maxGrade: 359 },
  ]

  for (const { direction, minGrade, maxGrade } of compassDirections) {
    if (grade >= minGrade && grade < maxGrade) {
      return `${grade}° ${direction}`
    }
  }

  return null
}
