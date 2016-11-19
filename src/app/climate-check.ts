export class ClimateCheck {

    public static get topics(): Object {
        return [
            {
                menuName: 'Energie',
                fullName: 'Energie in Geschäfts-/ Bildungsstätten',
                questions: [
                    {
                        points: 3,
                        question: 'Bezieht ihr Ökostrom oder nutzt eine alternative Strom- und Wärmegewinnung vor Ort (z.B. Photovoltaik)?',
                        true: 'Indem ihr Ökostrom bezieht, seid ihr Teil der Energiewende und leistet einen wichtigen gesellschaftlichen Beitrag für eine lebenswerte Zukunft! Wer Ökostrom nutzt, kann die Klimawirkung seiner Elektrogeräte schnell und dauerhaft reduzieren: Im Schnitt fallen dabei statt 633 Gramm CO2 pro Kilowattstunde nur 150 g/kWh an (also nur knapp ein Viertel!).',
                        false: 'Klimaschutz aktiv unterstützen: das geht sehr gut über den Wechsel zu einem Ökostrom-Anbieter. Seid Teil der Energiewende und unterstützt den Ausbau der Erneuerbaren Energiequellen! Stromerzeugung hat einen Anteil von 21,3 % am globalen CO2-Ausstoß. Wer Ökostrom nutzt, kann die Klimawirkung seiner Elektrogeräte schnell und dauerhaft reduzieren: Im Schnitt fallen dabei statt 633 Gramm CO2 pro Kilowattstunde nur 150 g/kWh an (also nur knapp ein Viertel!).  Zu einem Ökostrom-Anbieter wechseln geht ganz einfach: Anbieter aussuchen, Vertrag ausfüllen, abschicken. Fertig! Der neue Anbieter kümmert sich um die Kündigung des alten Vertrages. Der Wechsel zu Ökostrom lohnt sich oft auch finanziell: Ökostrom wird immer wettbewerbsfähiger, da er immer effizienter erzeugt werden kann. Achtet bei der Auswahl des Anbieters auf das „Grüner Strom Label“, denn auch hier gibt es Mogelpackungen.  Dieser Stromcheck zeigt euch, wie viel Ökostrom bei den einzelnen Anbietern für euch kostet:  http://www.klima-sucht-schutz.de/service/energiesparchecks/oekostromcheck/'
                    },
                    {
                        points: 2,
                        question: 'Habt ihr (vorwiegend oder ausschließlich) LEDs oder Energiesparlampen?',
                        true: 'Durch die Nutzung von LEDs spart ihr ca. 80% Strom gegenüber Glühlampen ein. Vorbildlich.',
                        false: 'LEDs sind rund 80% stromsparender als Glühlampen. Ihr spart beim Ersetzten von bereits einer 60-Watt-Glühbirne durch eine 11-Watt-LED-Lampe umgerechnet 26 Euro pro Jahr. Außerdem sind LEDs beim Einschalten sofort hell und damit auch gut für Räume geeignet, in denen das Licht oft an- und ausgemacht wird. Worauf ihr beim Kauf achten könnt, erfahrt ihr hier: http://www.be-smergy.de/energiespar-spezial/energiesparen-im-herbst-und-winter/es-werde-licht/'
                    },
                ]

            },
            {
                menuName: 'Verhalten',
                fullName: 'Verhalten im Büro',
                questions: [
                    {
                        points: 1,
                        question: 'Schaltet ihr den Bildschirm am PC in der Pause aus? Bzw. schaltet ihr den Laptop in den Ruhezustand?',
                        true: 'Schaltet ihr den Bildschirm am PC in der Pause aus? Bzw. schaltet ihr den Laptop in den Ruhezustand?',
                        false: 'Achtet beim Arbeiten am PC/Laptop darauf, dass er sich schon bei kürzeren Denk- oder Arbeitspausen automatisch in den Standby-Modus schaltet. (siehe Systemeinstellungen). Nicht vergessen: Bei längeren Pausen (spätestens ab 1 Stunde) bitte komplett herunterfahren.'
                    }
                ]
            }
        ];
    }
}
