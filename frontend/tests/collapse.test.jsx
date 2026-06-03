// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'
import {render, screen, within} from "@testing-library/react"
import { Collapse } from '../src/components/collapse/Collapse'
import userEvent from '@testing-library/user-event'

describe('<Collapse>', () => {
    it('should render title', () => {
        render(<Collapse title="my title" content="my content" />)
        expect(screen.getByText('my title')).to.exist
    })

    it('content is hidden by default', () => {
        render(<Collapse title="Title" content="Hidden Content" />)

        const content = screen.getByText("Hidden Content")
        const wrapper = content.closest(".collapse-wrapper")

        expect(wrapper.className).not.toContain("open")
    })

    it('opens when clicking arrow', async () => {
        render(<Collapse title="Title" content="Content" />)

        const content = screen.getByText("Content")
        const wrapper = content.closest(".collapse-wrapper")

        const button = within(content.closest(".collapse-list")).getByRole("button")
        await userEvent.click(button)

        expect(wrapper.className).toContain("open")
    })

    it('should render content', () => {
        render(<Collapse title="Title" content="My Content" />)
        expect(screen.getByText('My Content')).to.exist
    })

    it('updates arrow class when toggled', async () => {
        render(<Collapse title="Title" content="Content" />)

        const arrow = screen.getAllByAltText("toggle arrow")[0]

        expect(arrow.classList.contains("open")).toBe(false)

        await userEvent.click(arrow)

        expect(arrow.classList.contains('open')).toBe(true)
    })
})