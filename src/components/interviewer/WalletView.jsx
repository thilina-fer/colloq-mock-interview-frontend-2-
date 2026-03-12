import WalletSummaryCard from './WalletSummaryCard';
import BankStatusCard from './BankStatusCard';

export default function WalletView({ userProfile, onOpenBankModal }) {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-8 sm:space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-4 border-[#1A1A1A] pb-6 sm:pb-8 gap-4">
        <h1 className="font-['Unbounded'] text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight italic">
          Treasury Core.
        </h1>
        <p
          className={`font-['DM_Mono'] text-[12px] font-black uppercase ${
            userProfile.bankConnected ? 'text-green-600' : 'text-[#E63946]'
          }`}
        >
          {userProfile.bankConnected ? 'Bank Linked' : 'Awaiting Link'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <WalletSummaryCard
          balance={userProfile.walletBalance}
          bankConnected={userProfile.bankConnected}
        />
        <BankStatusCard
          bankConnected={userProfile.bankConnected}
          bankAccount={userProfile.bankAccount}
          onOpenModal={onOpenBankModal}
        />
      </div>
    </div>
  );
}
