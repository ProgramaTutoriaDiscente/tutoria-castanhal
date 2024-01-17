import MaxWidthWrapper from './MaxWidthWrapper'

export default function Footer() {
  return (
    <footer className="h-12 flex-grow-0 border-t border-gray-900/10">
      <MaxWidthWrapper>
        <div className="py-6 text-center">
          <p className="text-sm text-muted-foreground">
            Feito com ❤️ por Alícia e Aridan
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
