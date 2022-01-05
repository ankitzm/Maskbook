import { createPaletteAwareIcon } from '../utils'
import type { SvgIcon } from '@mui/material'

export const MaskGreyIcon: typeof SvgIcon = createPaletteAwareIcon(
    'Mask',
    <g>
        <path fill="#8796AF" d="M60 120A60 60 0 1060 0a60 60 0 000 120z" />
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M96 46v20H33.42a27.21 27.21 0 0050.95 6H96v16.8a7.2 7.2 0 01-7.2 7.2H31.2a7.2 7.2 0 01-7.2-7.2V46h72zM77.47 72a21.18 21.18 0 01-35.03 0h35.03zM44.6 50.8a11.2 11.2 0 00-11.09 9.6h6.14a5.2 5.2 0 019.9 0h6.14a11.2 11.2 0 00-11.09-9.6zm30.8 0a11.2 11.2 0 00-11.09 9.6h6.14a5.2 5.2 0 019.9 0h6.14a11.2 11.2 0 00-11.09-9.6zM88.8 24a7.2 7.2 0 017.2 7.2V40H24v-8.8a7.2 7.2 0 017.2-7.2h57.6z"
            clipRule="evenodd"
        />
    </g>,
    <g>
        <path d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18Z" fill="#2F3336" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.864 13.575v5.978H9.86c.83 3.627 4.123 6.336 8.058 6.336a8.273 8.273 0 0 0 7.415-4.543h3.531v5.021c0 1.189-.979 2.152-2.186 2.152H9.186C7.98 28.52 7 27.556 7 26.367V13.575h21.864Zm-5.628 7.771a6.46 6.46 0 0 1-5.318 2.764 6.46 6.46 0 0 1-5.317-2.764h10.635Zm-9.98-6.336c-1.714 0-3.131 1.247-3.367 2.87h1.864c.205-.625.8-1.077 1.503-1.077.702 0 1.298.452 1.503 1.076h1.863c-.235-1.622-1.653-2.869-3.366-2.869Zm9.353 0c-1.714 0-3.131 1.247-3.367 2.87h1.864c.205-.625.8-1.077 1.503-1.077.702 0 1.298.452 1.503 1.076h1.863c-.235-1.622-1.653-2.869-3.366-2.869ZM26.678 7c1.207 0 2.186.963 2.186 2.152v2.63H7v-2.63C7 7.963 7.979 7 9.186 7h17.492Z"
            fill="#15171A"
        />
    </g>,
    undefined,
    '0 0 120 120',
    [130, 40],
)
