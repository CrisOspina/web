type Route = {
  to: string
  title?: string
  name: string
}

type Image = {
  src: string
  alt?: string
}

type Social = {
  title: string
  href: string
  width?: string
  height?: string
  fill?: string
  viewBox: string
  path: () => {}
}

type User = {
  avatar: string
  login: string
}

type Project = {
  href: string
  name: string
  description?: string
  tools?: string[]
}
