export default function Heading() {
  return (
    <section className="bg-night-800 py-16 px-4">
      <div className="gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">

        {/* Texte */}
        <div className="font-light text-[#b8b09a] sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Un savoir-faire local, des chantiers soignés
          </h2>

          <p className="mb-4 leading-relaxed">
            Corrignan Couverture, c'est une entreprise familiale basée à Lanester, au cœur du bassin
            lorientais. On intervient sur tous types de toitures, ardoise naturelle, zinc, bac acier,
            aluminium, avec le soin qu'on apporterait à sa propre maison. Assez proches pour être
            réactifs, assez expérimentés pour tout gérer de A à Z.
          </p>

          <p className="leading-relaxed">
            Chaque chantier est suivi personnellement, du devis à la réception des travaux. Pas de
            sous-traitance, pas de mauvaise surprise : vous savez toujours qui est sur votre toit.
          </p>

          {/* petit accent visuel */}
          <div className="mt-6 w-16 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e0b84a]" />
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4 mt-10 lg:mt-0">

          <img
            className="w-full rounded-xl object-cover h-64 lg:h-auto border border-[#c9a84c22] shadow-lg"
            src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=800&auto=format&fit=crop"
            alt="Pose d'ardoise sur une toiture dans le Morbihan"
          />

          <img
            className="mt-4 w-full lg:mt-10 rounded-xl object-cover h-64 lg:h-auto border border-[#c9a84c22] shadow-lg"
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
            alt="Couvreur au travail sur un chantier de toiture"
          />

        </div>

      </div>
    </section>
  );
}