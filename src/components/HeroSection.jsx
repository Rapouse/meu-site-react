import { useRef, useState } from 'react';
import { MapPinned } from 'lucide-react';
import { FaWhatsapp, FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaCompress } from 'react-icons/fa';

const HeroSection = () => {
    const videoRef = useRef(null);
    const progressRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [progress, setProgress] = useState(0);

    // Função para alternar Play/Pause
    const togglePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    // Função para alternar Mute/Unmute
    const toggleMute = () => {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    // Função para alternar Fullscreen
    const toggleFullscreen = () => {
        if (!isFullscreen) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.webkitRequestFullscreen) {
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.mozRequestFullScreen) {
                videoRef.current.mozRequestFullScreen();
            } else if (videoRef.current.msRequestFullscreen) {
                videoRef.current.msRequestFullscreen();
            }
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            setIsFullscreen(false);
        }
    };

    // Atualiza a barra de progresso conforme o vídeo é reproduzido
    const handleTimeUpdate = () => {
        const current = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        const percent = (current / duration) * 100;
        setProgress(percent);
    };

    // Permite que o usuário clique e ajuste a posição do vídeo
    const handleProgressClick = (e) => {
        const width = progressRef.current.offsetWidth;
        const clickX = e.nativeEvent.offsetX;
        const duration = videoRef.current.duration;

        videoRef.current.currentTime = (clickX / width) * duration;
    };

    return (
        <main className="relative bg-[url('public/assets/Ouviden-Moema.jpg')] bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center">
            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-black/50 z-0" aria-hidden="true"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl px-4 md:px-6 lg:px-8">
                <section className="lg:w-1/2 text-white text-center lg:text-left">
                    <header>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Ouviden Aparelhos Auditivos em Moema - São Paulo
                        </h1>
                    </header>
                    <p className="mt-4 text-sm sm:text-base md:text-lg font-semibold">
                        Alameda dos Nhambiquaras, 1254, Moema - São Paulo
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center lg:justify-start">
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Alameda%20dos%20Nhambiquaras,%201254%20-%20Moema,%20S%C3%A3o%20Paulo%20-%20SP,%2004090-002,%20Brasil"
                            target="_blank"
                            aria-label="Como chegar à Ouviden Moema"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center text-sm sm:text-base font-bold bg-gradient-to-r from-[#32A0E4] to-[#0870AFCC] py-3 px-6 rounded-full transition-opacity duration-300 hover:opacity-75 w-full sm:w-auto"
                        >
                            COMO CHEGAR <MapPinned className="ml-2 text-2xl" />
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
                            aria-label="Fale conosco via WhatsApp"
                            className="flex justify-center items-center text-sm sm:text-base font-bold bg-gradient-to-r from-[#FFC71E] to-[#D6A000] py-3 px-6 rounded-full transition-opacity duration-300 hover:opacity-75 w-full sm:w-auto"
                        >
                            CHAMAR NO WHATSAPP <FaWhatsapp className="ml-2 text-2xl" />
                        </a>
                    </div>
                </section>
                <section className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
                    <div className="w-full max-w-lg rounded-xl overflow-hidden">
                        <video
                            ref={videoRef}
                            loop
                            muted={isMuted}
                            onTimeUpdate={handleTimeUpdate}
                            className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                            aria-label="Apresentação da Ouviden Moema"
                        >
                            <source src="public/assets/Ouviden-Moema.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Controles personalizados */}
                        <div className="flex items-center bg-white text-[#127aba] p-4 space-x-4">
                            <button onClick={togglePlayPause} aria-label={isPlaying ? "Pausar" : "Reproduzir"}>
                                {isPlaying ? <FaPause /> : <FaPlay />}
                            </button>
                            <div
                                ref={progressRef}
                                className="flex-1 h-2 bg-[#e9e9eb] cursor-pointer mx-4"
                                onClick={handleProgressClick}
                            >
                                <div
                                    style={{ width: `${progress}%` }}
                                    className="h-full bg-[#127aba]"
                                ></div>
                            </div>
                            <button onClick={toggleMute} aria-label={isMuted ? "Ativar som" : "Desativar som"}>
                                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                            </button>
                            <button onClick={toggleFullscreen} aria-label={isFullscreen ? "Sair do modo tela cheia" : "Modo tela cheia"}>
                                {isFullscreen ? <FaCompress /> : <FaExpand />}
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default HeroSection;
