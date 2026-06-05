// Allow href on all HTML elements (Anima codegen artifact)
declare namespace React {
  interface HTMLAttributes<T> {
    href?: string
    loop?: string
    title?: string
  }
}
