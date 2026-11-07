import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark-950 text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-racing-orange/20 border border-racing-orange/40 flex items-center justify-center text-racing-orange mb-4">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold font-display mb-2">
            John Auto Center — Recuperação de Inicialização
          </h1>
          <p className="text-sm text-slate-400 max-w-md mb-6">
            Ocorreu uma instabilidade pontual ao carregar os módulos. Clique abaixo para recarregar a interface.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-xl bg-racing-orange hover:bg-racing-orange/90 text-white font-semibold text-xs flex items-center gap-2 shadow-glow-orange-sm transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Recarregar Demonstração</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
