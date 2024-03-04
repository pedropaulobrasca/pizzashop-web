import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { PaginationComponent } from './pagination'

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  it('should display the right amount of pages and results', () => {
    // Pagination
    const wrapper = render(
      <PaginationComponent
        pageIndex={0}
        perPage={10}
        totalCount={100}
        onPageChange={() => {}}
      />,
    )
    const totalResults = wrapper.getByText('Total de 100 item(s)')
    const pageText = wrapper.getByText('Página 1 de 10')

    expect(totalResults).toBeInTheDocument()
    expect(pageText).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const wrapper = render(
      <PaginationComponent
        pageIndex={0}
        perPage={10}
        totalCount={100}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextButton = wrapper.getByLabelText('Go to next page')

    const user = userEvent.setup()

    await user.click(nextButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })
})
