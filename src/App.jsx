import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-slate-800">
        Profil Siswa
      </h1>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {/* Profil 1 */}
        <ProfileCard
          nama="Fathian Hanief"
          kelas="XI SIJA"
          jurusan="Sistem Informasi Jaringan dan Aplikasi"
          hobi="Editing & Design"
        />

        {/* Profil 2 */}
        <ProfileCard
          nama="Yanzx"
          kelas="XI SIJA"
          jurusan="Sistem Informasi Jaringan dan Aplikasi"
          hobi="Gamming & Hunting"
        />
      </div>
    </div>
  );
}

export default App;