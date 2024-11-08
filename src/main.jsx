import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Todo } from './Todo/Todo.jsx'
import SeoTags from './Todo/SeoTags.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SeoTags/>
    <Todo/>
  </StrictMode>,
)
