"use client";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import FilterInput from "./components/FilterInput";
import Statistics from "./components/Statistics";
import PageHeader from "./components/ui/PageHeader";
import { useContactsContext } from "./contexts/ContactsContext";
import useFilter from "./hooks/useFilter";
import useStatistics from "./hooks/useStatistics";

const HomePage = () => {
  const { contacts } = useContactsContext()
  const filterData = useFilter(contacts)
  const stats = useStatistics(contacts)

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <PageHeader title="Cadastro de Contatos">
          <FilterInput value={filterData.filter} onChange={filterData.handleFilterChange} />
        </PageHeader>

        {/* ===== FORMULÁRIO ===== */}
        <ContactForm />

        <Statistics stats={stats} />

        {/* ===== LISTA DE CONTATOS ===== */}
        <ContactList contacts={filterData.filteredContacts} />
      </div>
    </div>
  );
};

export default HomePage;
