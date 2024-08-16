import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

function NotificationComponent() {
    const fetcher = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/ispu`);
        return response.data;
    };

    const { data } = useSWR('data', fetcher, { refreshInterval: 500 });
    const [coData, setCoData] = useState(0);
    const [pm25Data, setPm25Data] = useState(0);
    const [ispuData, setIspuData] = useState(0);
    const [qualityCategory, setQualityCategory] = useState('');

    useEffect(() => {
        if (data) {
            setCoData(parseFloat(data.co));
            setPm25Data(parseFloat(data.pm25));
            setIspuData(parseFloat(data.finalISPU));
            setQualityCategory(getQualityCategory(data.finalISPU));
        }
    }, [data]);

    useEffect(() => {
        // Meminta izin notifikasi saat komponen dimuat
        Notification.requestPermission();
    }, []);

    useEffect(() => {
        // Memunculkan notifikasi jika nilai ISPU lebih dari atau sama dengan 101
        if (ispuData >= 101) {
            showNotification(coData, pm25Data, ispuData, qualityCategory);
        }
    }, [coData, pm25Data, ispuData, qualityCategory]);

    const showNotification = (co, pm25, ispu, category) => {
        if (Notification.permission === 'granted') {
            // Membuat dan menampilkan notifikasi
            new Notification('Peringatan Kualitas Udara', {
                body: `Nilai ISPU: ${ispu} (${category}), CO: ${co} µg/m³, PM2.5: ${pm25} µg/m³.`,
                icon: 'url_gambar_icon_notifikasi',
            });
        }
    };

    const getQualityCategory = (value) => {
        if (value >= 0 && value <= 50) {
            return 'Baik';
        } else if (value >= 51 && value <= 100) {
            return 'Sedang';
        } else if (value >= 101 && value <= 200) {
            return 'Tidak Sehat';
        } else if (value >= 201 && value <= 300) {
            return 'Sangat Tidak Sehat';
        } else {
            return 'Berbahaya';
        }
    };

    return (
        <>
        </>
    );
}

export default NotificationComponent;
