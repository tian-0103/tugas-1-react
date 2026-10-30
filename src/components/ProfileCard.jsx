function ProfileCard({ nama, kelas, jurusan, hobi }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold text-blue-600">{nama}</h2>

      <div className="space-y-2 text-slate-700">
        <p>
          <span className="font-semibold">Kelas:</span> {kelas}
        </p>
        <p>
          <span className="font-semibold">Jurusan:</span> {jurusan}
        </p>
        <p>
          <span className="font-semibold">Hobi:</span> {hobi}
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;