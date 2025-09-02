import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
          CRM System
        </h1>
        <p className="text-gray-600 text-center mb-6">
          System zarządzania relacjami z klientami
        </p>
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Klienci</h3>
            <p className="text-blue-700 text-sm">Zarządzaj bazą klientów</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 mb-2">Transakcje</h3>
            <p className="text-green-700 text-sm">Śledź sprzedaż i oferty</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-purple-900 mb-2">Zadania</h3>
            <p className="text-purple-700 text-sm">Organizuj pracę zespołu</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App