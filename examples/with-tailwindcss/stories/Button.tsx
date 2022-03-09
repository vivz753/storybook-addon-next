import clsx from 'clsx'
import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import { forwardRef, MouseEvent, PropsWithChildren } from 'react'

/**
 * Props common to Link and Button
 */
type BaseButtonProps = PropsWithChildren<{
  /**
   * Allows for custom styling/overriding styles, preferably Tailwind CSS only
   * Merges and overrides the default styles
   */
  className?: string
  /**
   * For applying different styles on the button
   * @default "solid"
   */
  variant?: 'solid' | 'outlined'
  /**
   * If 'sm' the button width will only be as wide as its contents, otherwise it grows to the full width of the parent
   */
  size?: 'sm' | 'full'
}>

/**
 * Props specific to the Link Button
 */
interface LinkButtonProps
  extends BaseButtonProps,
    Omit<LinkProps, 'as' | 'href'> {
  href?: LinkProps['href']

  // TODO: add prop to handle opening link in a new tab
}

/**
 * Props specific to the Button
 * 
 // TODO: add HTMLButton props to allow more use cases -- like accessibility
 */
interface OnlyButtonProps extends BaseButtonProps {
  /**
   * HTML attribute type, 'submit' is useful for <form>, otherwise default 'button' is fine
   * @default "button"
   */
  type?: 'button' | 'submit' | 'reset'
  /**
   * If 'true', button becomes unclickable and hover styles are disabled
   */
  disabled?: boolean
  /**
   * If 'true' the solid button will show a spinner and become unclickable
   */
  isLoading?: boolean
  /**
   * If 'true' the solid button will show a check and become unclickable
   */
  isSuccess?: boolean
  /**
   * Passing an function to be called when button is clicked
   */
  onClick?: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void | Promise<void>

  // Used for discriminated union
  href: undefined
}

type ButtonProps = OnlyButtonProps | LinkButtonProps

/**
 * Type guard to determine if the props are for a Link or a Button
 */
const isLink = (props: ButtonProps): props is LinkButtonProps => 'href' in props
const isButton = (props: ButtonProps): props is OnlyButtonProps =>
  !('href' in props)

// TODO: need to style button press state (active)

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', size = 'full', children, ...rest }, ref) => {
    const baseStyle = `button-base ${size === 'sm' ? 'button-small' : ''}`
    const variantStyles =
      variant === 'outlined' ? 'button-outlined' : 'button-solid'

    const content = children && (
      <span className="mx-2 flex flex-row items-center justify-center z-50">
        {children}
      </span>
    )

    if (isLink(rest)) {
      return (
        <Link href={rest.href} {...rest}>
          <a
            // TODO: support ref for Link
            className={`${baseStyle} ${variantStyles} ${className ?? ``}`}
          >
            {content}
          </a>
        </Link>
      )
    }

    if (isButton(rest)) {
      return (
        <button
          ref={ref}
          type={rest.type || 'button'}
          disabled={rest.disabled}
          onClick={async event => {
            if (!rest.onClick || rest.isSuccess || rest.isLoading) return

            await rest.onClick(event)
          }}
          className={clsx(
            baseStyle,
            variantStyles,
            { 'button-success': rest.isSuccess },
            { 'button-loading': rest.isLoading },
            className
          )}
        >
          {content}
          {variant === 'solid' ? (
            rest.isSuccess ? (
              <div className="flex">
                <Image
                  src="/images/check.svg"
                  className="flex"
                  width={18}
                  height={18}
                  alt="check"
                />
              </div>
            ) : (
              rest.isLoading && (
                <div className="flex">
                  <Image
                    src="/images/spinner.svg"
                    className="flex animate-spin"
                    width={24}
                    height={24}
                    alt="spinner"
                  />
                </div>
              )
            )
          ) : null}
        </button>
      )
    }

    return null
  }
)

Button.displayName = 'Button'
