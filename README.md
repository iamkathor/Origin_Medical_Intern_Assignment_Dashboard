# Origin_Medical_Intern_Assignment_Dashboard
This is the `README.md` file for the **Origin Medical Operations Tracking System**, designed to manage the critical 6-week window leading up to a Regulatory Study.

---

# 🏥 Origin Medical: Operations Tracking System

An integrated, three-layer tracking framework designed to synchronize clinical research, material procurement, and team capacity for a high-stakes healthcare AI startup.

## 📌 Overview
The system is built as a unified command center (Google Sheets/Excel Online) that balances the competing demands of a **USA-based Pilot Study**, a **Scientific Conference**, and **Regulatory Study Preparation**. 

The architecture follows a **Decentralized Input / Centralized Visibility** model: team members manage their specific domains, while a Master Dashboard aggregates risks through automated RAG (Red/Amber/Green) status triggers.

---

## 🏗 System Architecture

The tracker is divided into three functional layers:

### 📦 Tracker A: Material Logistics
*Focus: Procurement, Lead Times, and Site Deployment.*

| Field | Purpose | Example Entry |
| :--- | :--- | :--- |
| **Item ID** | Unique asset/consumable tag | `DEV-001 Ultrasound Probe` |
| **Study Association** | Links item to specific site/event | `Regulatory Study` |
| **Quantity** | Flags shortfalls instantly | `Reqd: 4 / Avail: 1` |
| **Lead Time** | Risk visibility for 7–10 day windows | `ETA: Week 5` |
| **Budget Roll-up** | Real-time spend vs. $50k ceiling | `$3,200` |

### 📄 Tracker B: Research Study Logistics
*Focus: Documentation, Compliance, and Travel.*

| Field | Purpose | Status Example |
| :--- | :--- | :--- |
| **Document Name** | IRB Protocols, Consent Forms, etc. | `IRB Protocol v3.1` |
| **Type** | Pilot vs. Regulatory distinction | `Regulatory` |
| **Status** | Workflow stage tracking | `In Review — Due Wk 3` |
| **Owner** | Single Point of Accountability (SPA) | `Dr. A. Rao` |
| **Travel Log** | Visa, Flight, and Hotel status | `Confirmed: US Site B` |

### 👥 Tracker C: Resource Allocation
*Focus: Team capacity (FTE %) and burnout prevention.*

| Team Member | Role | Pilot % | Conf % | Reg Prep % | Roadshow % | Total % |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Dr. A. Rao** | Clinical Lead | 60% | 20% | 20% | 0% | **100% 🟡** |
| **P. Mehta** | Ops Manager | 40% | 0% | 60% | 0% | **100% 🟡** |
| **S. Kumar** | Engineer | 20% | 0% | 80% | 0% | **100% 🟡** |

---

## 📈 Key Weekly Metrics (KPIs)

These metrics are calculated automatically and reviewed every Monday in the **30-minute Ops Sync**.

| Metric | Calculation | 🟢 Good | 🟡 Amber | 🔴 Red |
| :--- | :--- | :--- | :--- | :--- |
| **M1: Reg. Capacity** | Sum of Reg Prep % ÷ Req. FTE | $\ge 70\%$ | $50–69\%$ | $< 50\%$ |
| **M2: Material Readiness** | Delivered Items ÷ Total Needed | $\ge 90\%$ | $75–89\%$ | $< 75\%$ |
| **M3: Doc Completion** | Approved Docs ÷ Total Required | $\ge 80\%$ (Wk 4) | $60–79\%$ | $< 60\%$ |
| **M4: Travel Readiness** | Confirmed Bookings ÷ Total Travelers | $100\%$ (Wk 1) | $80–99\%$ | $< 80\%$ |
| **M5: Budget Burn** | Committed Spend ÷ $50,000 | $\le 80\%$ | $81–95\%$ | $> 95\%$ |

---

## 🚨 Conflict Resolution: The "Rao Multi-Booking" Case

### The Signal
In **Week 2**, the system flagged a critical resource collision for **Dr. A. Rao**:
1.  **Pilot Study** (USA Site Presence)
2.  **Conference** (Presenter Role)
3.  **Roadshow** (New Demo Request)
4.  **Result:** Tracker C showed **110% Allocation** 🔴 and M1 Regulatory Capacity dropped to **61%** 🟡.

### The Decision (Option A)
> **Prioritize Regulatory Foundation over Business Development.**

*   **Action:** Dr. Rao stays on-site for the Pilot/Reg Prep. T. Singh is deputized to present at the conference. The Roadshow is deferred.
*   **Rationale:** Regulatory study success is the company’s "North Star." A 1-day travel gap or presenter change is recoverable; a regulatory delay due to insufficient prep is a multi-month, high-cost failure.

---

## 🛠 Setup Instructions
1.  **Clone the Template:** Duplicate the `Origin_Ops_Master_v1` sheet.
2.  **Input Lead Times:** Hardcode the 7–10 day delivery windows into Tracker A.
3.  **Define Deadlines:** Set the "Regulatory Study Start" as Week 7; all Document Completion (M3) formulas count down from this date.
4.  **Enable Conditional Formatting:**
    *   Cell Value > 100% → Red Fill (Resource Allocation).
    *   Date < Today() + 7 AND Status != "Delivered" → Amber Fill (Logistics).

---

## 📝 Governance
*   **Update Cadence:** Individual updates by Friday 4:00 PM.
*   **Ops Review:** Mondays 9:00 AM – 9:30 AM.
*   **Emergency Trigger:** Any 🔴 Red metric triggers an immediate Slack escalation to the CEO/Clinical Lead.

---
*Last Updated: February 2026*
*Maintained by: Operations Team (Origin Medical)*
