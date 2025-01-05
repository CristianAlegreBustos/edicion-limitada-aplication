import Image from 'next/image';

export function LogoHeader() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 relative mb-4">
        <Image
          src="/placeholder.svg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>
      <h2 className="text-2xl font-bold text-[#B99A02]">Panel Administrativo</h2>
      <p className="text-gray-400 text-sm">
        Ingrese sus credenciales para acceder
      </p>
    </div>
  );
}
