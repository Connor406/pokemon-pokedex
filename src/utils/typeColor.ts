const typeColors = [
  {
    type: ["fire", "dragon", "fighting"],
    color: "orange",
    gradient: "linear(to-b, #ffd3c7, #ffffff)",
  },
  {
    type: ["water", "ice", "flying"],
    color: "cyan",
    gradient: "linear(to-b, #d6faff, #ffffff)",
  },
  {
    type: ["bug", "electric", "psychic"],
    color: "yellow",
    gradient: "linear(to-b, #fff5d5, #ffffff)",
  },
  { type: ["grass"], color: "green", gradient: "linear(to-b, #d9ffd4, #ffffff)" },
]

export function getTypeColor(type) {
  const c = typeColors.find(t => t.type.includes(type))
  if (!c) return "gray"
  return c.color
}

export function getTypeGradient(type) {
  const c = typeColors.find(t => t.type.includes(type))
  if (!c) return "linear(to-b, #fff6f2, #ffffff)"
  return c.gradient
}
