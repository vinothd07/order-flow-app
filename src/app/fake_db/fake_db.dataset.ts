import { Orders } from "../models/orders.model";

export class OrdersFakeDb
{
    public static orders: Orders[] = [
        {
            _id: 866,
            info: "Auris TR345",
            name: "Ahmed",
            whatsappnumber: 8667412041,
            invoice: {
                particulars: "GP-LCVUZK-683",
                createdby: "Vidyut",
                completiondate: "2021-05-18 15:33:20",
                total: 799.05,
                amountdue: 298.55
            },
            state: {
                status: 'Payment Due',
                state: 'Open',
                iswashing: true,
                israshid: true
            }
        },
        {
            _id: 869,
            info: "Auris NR789",
            name: "Ahmed",
            whatsappnumber: 8667412042,
            invoice: {
                particulars: "GP-LCVUZK-663",
                createdby: "Vidyuta",
                completiondate: "2021-05-20 09:33:20",
                total: 199.05,
                amountdue: 398.55
            },
            state: {
                status: 'Payment Due',
                state: 'Open',
                iswashing: false,
                israshid: true
            }
        },
        {
            _id: 819,
            info: "Auris RR671",
            name: "Ahmed",
            whatsappnumber: 8667412043,
            invoice: {
                particulars: "GP-LCVUZK-163",
                createdby: "Vidyut",
                completiondate: "2021-05-05 19:33:20",
                total: 99.05,
                amountdue: 98.55
            },
            state: {
                status: 'Payment Due',
                state: 'Open',
                iswashing: false,
                israshid: false
            }
        },
        {
            _id: 849,
            info: "Auris RR672",
            name: "Ahmed",
            whatsappnumber: 8667412044,
            invoice: {
                particulars: "GP-LCVUZK-123",
                createdby: "Vidyut",
                completiondate: "2021-06-05 19:33:20",
                total: 199.05,
                amountdue: 198.55
            },
            state: {
                status: 'Payment Due',
                state: 'WIP',
                iswashing: true,
                israshid: false
            }
        }, {
            _id: 851,
            info: "Auris RR812",
            name: "Ahmed",
            whatsappnumber: 8667412045,
            invoice: {
                particulars: "GP-LCVUZK-223",
                createdby: "Vidyut",
                completiondate: "2021-07-05 13:33:20",
                total: 899.05,
                amountdue: 298.55
            },
            state: {
                status: 'Payment Due',
                state: 'Ready',
                iswashing: true,
                israshid: true
            }
        }, {
            _id: 855,
            info: "Auris RR412",
            name: "Ahmed",
            whatsappnumber: 8667412046,
            invoice: {
                particulars: "GP-LCVUZK-423",
                createdby: "Vidyut",
                completiondate: "2021-07-15 13:33:20",
                total: 399.05,
                amountdue: 998.55
            },
            state: {
                status: 'Payment Due',
                state: 'Ready',
                iswashing: true,
                israshid: true
            }
        }, {
            _id: 835,
            info: "Auris RR422",
            name: "Ahmed",
            whatsappnumber: 8667412047,
            invoice: {
                particulars: "GP-LCVUZK-413",
                createdby: "Vidyut",
                completiondate: "2021-07-25 13:33:20",
                total: 699.05,
                amountdue: 118.55
            },
            state: {
                status: 'Payment Due',
                state: 'Payment',
                iswashing: false,
                israshid: false
            }
        }
    ]
}