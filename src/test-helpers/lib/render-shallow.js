import { createRenderer } from 'react-addons-test-utils'

const renderShallow = (element, context = {}) => {
  const renderer = createRenderer()
  renderer.render(element, context)

  const getOutput = () => renderer.getRenderOutput()

  return {
    output : getOutput(),
    rerender : getOutput
  }
}

export default renderShallow

