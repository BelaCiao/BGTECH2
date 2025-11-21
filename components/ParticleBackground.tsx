import React, { useRef, useEffect } from 'react';

interface ParticleBackgroundProps {
    particleColor?: string;
    lineColor?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
    particleColor = 'rgba(255, 255, 255, 0.5)',
    lineColor = 'rgba(255, 255, 255, 0.2)'
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        
        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;

            constructor() {
                this.x = Math.random() * canvas!.clientWidth;
                this.y = Math.random() * canvas!.clientHeight;
                this.size = Math.random() * 1.5 + 1;
                this.speedX = Math.random() * 0.4 - 0.2;
                this.speedY = Math.random() * 0.4 - 0.2;
            }

            update() {
                if (!canvas) return;
                if (this.x > canvas.clientWidth || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.clientHeight || this.y < 0) this.speedY *= -1;
                this.x += this.speedX;
                this.y += this.speedY;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = particleColor;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        const init = () => {
            particles = [];
            // Densidade baseada no tamanho da tela (aproximadamente 1 particula a cada 10000-15000px quadrados)
            const particleCount = Math.floor((canvas.clientWidth * canvas.clientHeight) / 12000);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            // Define o tamanho interno do canvas para corresponder aos pixels físicos
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            // Normaliza o sistema de coordenadas para CSS pixels
            ctx.scale(dpr, dpr);
            init();
        };
        
        const connect = () => {
            if (!ctx) return;
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 120; 

                    if (distance < maxDistance) {
                        opacityValue = 1 - (distance / maxDistance);
                        
                        // Tenta injetar a opacidade se for rgba
                        let currentLineColor = lineColor;
                        if (lineColor.startsWith('rgba')) {
                             currentLineColor = lineColor.replace(/[^,]+(?=\))/, opacityValue.toFixed(2));
                        }
                        
                        ctx.strokeStyle = currentLineColor;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };
        
        const animate = () => {
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas(); // Inicializa
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [particleColor, lineColor]);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />;
};

export default ParticleBackground;