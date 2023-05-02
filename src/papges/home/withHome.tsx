import React from 'react'

export interface WithHome {
  data: string
}

const withHome = <T extends WithHome>(Component: React.FC<T>) => {
  return (props: Omit<T, keyof WithHome>) => {

    return (
      <Component {...(props as T)} data='123'/>
    )
  }
}

export default withHome