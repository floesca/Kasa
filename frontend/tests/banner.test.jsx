// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'
import {render, screen} from "@testing-library/react"
import { Banner } from '../src/components/Banner'

describe('<Collapse>', () => {
    it('should render the banner image', () => {
        render(<Banner image="/test.jpg" title="Hello" />)

        const img = screen.getByRole("img")

        expect(img).to.exist
    })

    it('should have the correct alt text', () => {
        render(<Banner image="/test.jpg" title="Hello" />)

        const img = screen.getAllByRole("img")[0]

        expect(img.getAttribute("alt")).toBe("banner Kasa")
    })
})
