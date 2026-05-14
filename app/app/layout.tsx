import AppLayout from '@/components/app/App-Layout'
import ChildrenInterface from '@/interfaces/children-interface'
import React, { FC } from 'react'

const AppLayoutRouter: FC<ChildrenInterface> = ({children}) => {
  return (
    <AppLayout>
      {children}
    </AppLayout>
  )
}

export default AppLayoutRouter