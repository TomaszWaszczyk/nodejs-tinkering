interface Invoice {
    number: string;
    amount_usd: number;
    company_id: number;
}

const invoices: Invoice[] = [
    { number: "INV-001", amount_usd: 10, company_id: 1 },
    { number: "INV-002", amount_usd: 2500, company_id: 2 },
    { number: "INV-003", amount_usd: 3500, company_id: 3 },
    { number: "INV-004", amount_usd: 4500, company_id: 4 },
    { number: "INV-005", amount_usd: 5500, company_id: 5 },
    { number: "INV-006", amount_usd: 6500, company_id: 6 },
    { number: "INV-007", amount_usd: 7500, company_id: 7 },
    { number: "INV-008", amount_usd: 8500, company_id: 8 },
    { number: "INV-009", amount_usd: 10, company_id: 1 },
    { number: "INV-010", amount_usd: 10, company_id: 1 },
];

const suma = invoices.filter(invoice => invoice.company_id === 1).reduce((acc, invoice) => acc + invoice.amount_usd, 0);

console.log(suma);
