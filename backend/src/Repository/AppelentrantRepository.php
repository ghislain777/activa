<?php

namespace App\Repository;

use App\Entity\Appelentrant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Appelentrant|null find($id, $lockMode = null, $lockVersion = null)
 * @method Appelentrant|null findOneBy(array $criteria, array $orderBy = null)
 * @method Appelentrant[]    findAll()
 * @method Appelentrant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AppelentrantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Appelentrant::class);
    }

    // /**
    //  * @return Appelentrant[] Returns an array of Appelentrant objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Appelentrant
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
